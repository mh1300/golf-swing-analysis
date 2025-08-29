from datetime import datetime
from typing import Optional, List

from sqlalchemy import Column, Integer, String, Enum as SQLEnum, ForeignKey, DateTime, func
from sqlalchemy.orm import declarative_base, relationship

from app.enums import FlightDirection, FlightPath, Club

Base = declarative_base()


class Video(Base):
    __tablename__ = "video"

    id = Column(Integer, primary_key=True)
    date = Column(DateTime, default=func.now(), nullable=False)
    club = Column(SQLEnum(Club, native_enum=False), nullable=False)
    flightDirection = Column(SQLEnum(FlightDirection, native_enum=False), nullable=True)
    flightPath = Column(SQLEnum(FlightPath, native_enum=False), nullable=True)
    videoPath = Column(String, nullable=False)

    frames: List["VideoFrame"] = relationship("VideoFrame", back_populates="video", cascade="all, delete-orphan")

    def __repr__(self):
        return (
            f"Video(id={self.id!r}, date={self.date!r}, club={self.club!r}, "
            f"flightDirection={self.flightDirection!r}, flightPath={self.flightPath!r}, "
            f"videoPath={self.videoPath!r})"
        )


class VideoFrame(Base):
    __tablename__ = "frame"

    videoID = Column(Integer, ForeignKey("video.id"), primary_key=True)
    frameIndex = Column(Integer, primary_key=True)
    coordinates = Column(String, nullable=False)
    swingPhase = Column(Integer, nullable=False)

    video: Optional[Video] = relationship("Video", back_populates="frames")

    def __repr__(self):
        return (
            f"VideoFrame(videoID={self.videoID!r}, frameIndex={self.frameIndex!r}, "
            f"coordinates={self.coordinates!r}, swingPhase={self.swingPhase!r})"
        )