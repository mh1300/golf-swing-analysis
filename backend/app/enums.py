from enum import Enum

class Club(str, Enum):
    DRIVER = "Driver"
    TWO_WOOD = "2-Wood"
    THREE_WOOD = "3-Wood"
    FOUR_WOOD = "4-Wood"
    FIVE_WOOD = "5-Wood"
    SEVEN_WOOD = "7-Wood"
    NINE_WOOD = "9-Wood"

    ONE_HYBRID = "1-Hybrid"
    TWO_HYBRID = "2-Hybrid"
    THREE_HYBRID = "3-Hybrid"
    FOUR_HYBRID = "4-Hybrid"
    FIVE_HYBRID = "5-Hybrid"
    SIX_HYBRID = "6-Hybrid"
    SEVEN_HYBRID = "7-Hybrid"
    EIGHT_HYBRID = "8-Hybrid"
    NINE_HYBRID = "9-Hybrid"

    ONE_IRON = "1-Iron"
    TWO_IRON = "2-Iron"
    THREE_IRON = "3-Iron"
    FOUR_IRON = "4-Iron"
    FIVE_IRON = "5-Iron"
    SIX_IRON = "6-Iron"
    SEVEN_IRON = "7-Iron"
    EIGHT_IRON = "8-Iron"
    NINE_IRON = "9-Iron"

    PITCHING_WEDGE = "Pitching Wedge"
    GAP_WEDGE = "Gap Wedge"
    SAND_WEDGE = "Sand Wedge"
    LOB_WEDGE = "Lob Wedge"
    ULTRA_LOB_WEDGE = "Ultra Lob Wedge"

    CHIPPER = "Chipper"

    PUTTER = "Putter"

class FlightDirection(str, Enum):
    PUSH = "Push"
    STRAIGHT = "Straight"
    PULL = "Pull"

class FlightPath(str, Enum):
    STRAIGHT = "Straight"
    HOOK = "Hook"
    DRAW = "Draw"
    FADE = "Fade"
    SLICE = "Slice"
    
