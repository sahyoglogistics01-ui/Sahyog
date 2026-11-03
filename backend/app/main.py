from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Sahyog API", description="Backend for the Sahyog logistics platform")

# Configure CORS so the Next.js frontend can talk to the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Sahyog API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}