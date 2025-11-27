from pathlib import Path

# Корень бекенда: папка, где лежит src/
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Общая папка для медиа
MEDIA_ROOT = BASE_DIR / "media"

# Папка specifically для рилсов
REELS_ROOT = MEDIA_ROOT / "reels"

# Гарантируем, что директории существуют
REELS_ROOT.mkdir(parents=True, exist_ok=True)
