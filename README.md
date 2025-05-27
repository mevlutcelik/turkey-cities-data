# turkey-cities-data

📍 Türkiye şehirlerine ait **JSON veri kümesi**:  
Plaka, koordinatlar (lat/lon), nüfus (2024 ADNKS) ve coğrafi bölge bilgilerini içerir.

## 🔧 Kurulum

```bash
npm i turkey-cities-data
```

## 🚀 Kullanım

```js
import {cities} from "turkey-cities-data";

const istanbul = cities.get("istanbul");
console.log(istanbul);

/*
{
  id: 77,
  slug: 'istanbul',
  label: 'İstanbul',
  coord: { lat: 41.0082, lon: 28.9784 },
  plate: '34',
  region: { slug: 'marmara', label: 'Marmara' },
  population: 15701602
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