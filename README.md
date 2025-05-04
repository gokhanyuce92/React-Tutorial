# React Tutorial

Bu proje, React Hook'larını öğrenmek ve uygulamak için hazırlanmış bir eğitim çalışmasıdır. Proje, React'in temel ve ileri düzey hook'larını anlamak ve kullanmak isteyen geliştiriciler için bir rehber niteliğindedir.

## İçerik

Bu projede aşağıdaki React Hook'ları ele alınmıştır:

- **useState**: State yönetimi için temel hook.
- **useEffect**: Yan etkileri (side effects) yönetmek için kullanılır.
- **useReducer**: Karmaşık state yönetimi için alternatif bir yöntem.
- **useContext**: Context API ile global state yönetimi.
- **useMemo**: Performans optimizasyonu için hesaplamaları önbelleğe alır.
- **useRef**: DOM elemanlarına doğrudan erişim ve mutable değerler için kullanılır.

### Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirme.
- **JavaScript (ES6)**: Modern JavaScript özellikleri.
- **Node.js ve npm**: Proje bağımlılıkları ve geliştirme ortamı.

### Chat API Application

- **Form Üzerinden Veri Gönderimi:**
  Kullanıcı, bir form aracılığıyla mesajını API'ye gönderebilir.
- **Axios ile API Çağrısı:**
  API çağrıları için `axios` kütüphanesi kullanılmıştır. Asenkron işlemler `async/await` ile yönetilmiştir.
- **Markdown İşleme:**
  API'den dönen yanıt, `react-markdown` ve `remark-gfm` kullanılarak Markdown formatında işlenir ve HTML olarak render edilir.

## Kurulum

Projeyi çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın:**
   ```bash
   git clone https://github.com/gokhanyuce92/react-tutorial.git
   cd react-tutorial
   ```
