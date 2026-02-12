// Filter constants
const categoriesByType = {
    Audio: ["Headphones", "Speakers", "Earphones", "Microphones", "Accessories"],
    Gaming: ["Controllers", "Keyboards & Mice", "Headsets", "Monitors", "Accessories"],
    Wearable: ["Smartwatches", "Fitness Bands", "Earwear", "Smart Rings", "Accessories"],
    Photography: ["Cameras", "Lenses", "Tripods", "Lighting", "Accessories"],
};

const prices = ["under100", "100to200", "200to300", "300above"];
const priceLabels = {
    'under100': 'Under $100',
    '100to200': '$100 - $200',
    '200to300': '$200 - $300',
    '300above': '$300+'
};

const ratings = ["5", "4", "3"];
const ratingLabels = {
    '5': '5★',
    '4': '4★+',
    '3': '3★+'
};

const specialFilters = ["Bestseller", "New", "Onsale", "Hot"];

export
 { 
     categoriesByType,
     prices,
     priceLabels,
     ratings,
     ratingLabels,
     specialFilters
 }