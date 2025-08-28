from fastapi import FastAPI

from app.models import Video, VideoFrame

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "How are you"}
