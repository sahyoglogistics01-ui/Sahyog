"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, CheckSquare, Square, Trash2, Filter } from "lucide-react";

export type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: any, item: T) => React.ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  onBulkAction?: (selectedIds: any[]) => void;
  bulkActionLabel?: string;
};

export default function DataTable<T extends { id: string | number }>({ data, columns, onBulkAction, bulkActionLabel = "Delete Selected" }: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredData.length) setSelectedIds([]);
    else setSelectedIds(filteredData.map((d) => d.id));
  };

  const toggleSelect = (id: string | number) => {
    setSelectedIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  return (
    <div className="bg-[#09090b] border border-white/10 rounded-xl overflow-hidden">
      {/* Table Toolbar */}
      <div className="p-4 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search records..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:border-rose-500 outline-none"
          />
        </div>
        
        <AnimatePresence>
          {selectedIds.length > 0 && onBulkAction && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => { onBulkAction(selectedIds); setSelectedIds([]); }}
              className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-rose-500 transition-colors"
            >
              <Trash2 className="w-4 h-4" /> {bulkActionLabel} ({selectedIds.length})
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900/50 text-xs uppercase text-slate-500 border-b border-white/10">
            <tr>
              {onBulkAction && (
                <th className="p-4 w-10">
                  <button onClick={toggleSelectAll} className="text-slate-400 hover:text-white">
                    {selectedIds.length === filteredData.length && filteredData.length > 0 ? <CheckSquare className="w-5 h-5 text-rose-500" /> : <Square className="w-5 h-5" />}
                  </button>
                </th>
              )}
              {columns.map((col) => (
                <th key={String(col.accessor)} className="p-4 font-semibold">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredData.length === 0 ? (
              <tr><td colSpan={columns.length + 1} className="p-8 text-center text-slate-500">No records found.</td></tr>
            ) : (
              filteredData.map((item) => (
                <tr key={item.id} className={`hover:bg-white/5 transition-colors ${selectedIds.includes(item.id) ? "bg-rose-600/5" : ""}`}>
                  {onBulkAction && (
                    <td className="p-4">
                      <button onClick={() => toggleSelect(item.id)} className="text-slate-400 hover:text-white">
                        {selectedIds.includes(item.id) ? <CheckSquare className="w-5 h-5 text-rose-500" /> : <Square className="w-5 h-5" />}
                      </button>
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={String(col.accessor)} className="p-4">
                      {col.render ? col.render(item[col.accessor], item) : String(item[col.accessor])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}