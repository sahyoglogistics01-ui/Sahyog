import httpx
import os
from fastapi import HTTPException, Request

TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v1/siteverify"

async def verify_turnstile_token(token: str, remote_ip: str = None) -> bool:
    """Verifies the Turnstile token with Cloudflare's API."""
    if not token:
        raise HTTPException(status_code=400, detail="Captcha token missing")

    secret = os.getenv("TURNSTILE_SECRET_KEY")
    payload = {"secret": secret, "response": token}
    
    if remote_ip:
        payload["remoteip"] = remote_ip

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(TURNSTILE_VERIFY_URL, data=payload)
            response.raise_for_status()
            result = await response.json()
            
            if not result.get("success"):
                raise HTTPException(status_code=400, detail="Captcha verification failed")
            return True
        except httpx.RequestError:
            raise HTTPException(status_code=500, detail="Captcha service unavailable")