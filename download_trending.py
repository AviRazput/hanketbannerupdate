import urllib.request
import os

images = {
    "trending_dresses.jpg": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80", # Dress
    "trending_sarees.jpg": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80", # Indian wear / Saree style
    "trending_tops.jpg": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80", # Tops
    "trending_heels.jpg": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80", # Heels
    "trending_earrings.jpg": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", # Earrings
    "trending_kurtas.jpg": "https://images.unsplash.com/photo-1583391733958-692797e883e0?w=800&q=80" # Kurta
}

dest_dir = r"C:\Users\AviRazput\Desktop\hanket\public\trending"
os.makedirs(dest_dir, exist_ok=True)

for filename, url in images.items():
    filepath = os.path.join(dest_dir, filename)
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Saved to {filepath}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
