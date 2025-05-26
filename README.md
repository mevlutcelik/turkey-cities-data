# turkey-cities-data

📍 Türkiye şehirlerine ait **JSON veri kümesi**:  
Plaka, koordinatlar (lat/lon), nüfus (2024 ADNKS) ve coğrafi bölge bilgilerini içerir.

## 🔧 Kurulum

```bash
npm install turkey-cities-data
```

## 🚀 Kullanım

```js
import {cities} from "turkey-cities-data";

console.log(cities[0]);
/*
{
  id: 0,
  slug: "adana",
  label: "Adana",
  plate: "01",
  coord: { lat: 37.0, lon: 35.3213 },
  region: { slug: "akdeniz", label: "Akdeniz" },
  population: 2280484
}
*/
```

## 📁 İçerik Yapısı

Her şehir nesnesi şu alanları içerir:

| Alan       | Açıklama                         |
|------------|----------------------------------|
| `id`       | A–Z sırasına göre şehir ID'si    |
| `slug`     | Anahtar kelime (küçük harfli)    |
| `label`    | Şehir adı                        |
| `plate`    | 2 haneli plaka kodu (`"01"`)     |
| `coord`    | `{ lat, lon }` koordinat objesi  |
| `region`   | `{ slug, label }` bölge objesi   |
| `population` | 2024 sonu ADNKS nüfus verisi   |

## 🗺️ Bölgeler

Şehirler 7 coğrafi bölgeye göre gruplanmıştır:
- Akdeniz
- Ege
- Marmara
- Karadeniz
- İç Anadolu
- Doğu Anadolu
- Güneydoğu Anadolu

## 📦 Dağıtım

Paket hem **npm** hem de **GitHub** üzerinden erişilebilir:
- NPM: `https://www.npmjs.com/package/turkey-cities-data`
- GitHub: `https://github.com/mevlutcelik/turkey-cities-data`

## 📄 Lisans

MIT © 2025