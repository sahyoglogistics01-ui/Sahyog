from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, EmailStr
from .security import verify_turnstile_token

class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    turnstile_token: str

@app.post("/api/login")
async def login(payload: LoginRequest, request: Request):
    # Get the user's IP for better verification
    client_ip = request.client.host
    
    # Verify the token before doing anything else
    await verify_turnstile_token(payload.turnstile_token, client_ip)
    
    # If successful, proceed with login logic...
    return {"message": "Login successful"}