import './globals.css';

export const metadata = {
  title: 'Java Bronze 模擬試験',
  description: 'Java Bronze資格試験のための模擬試験アプリケーション',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="grid-effect"></div>
        {children}
      </body>
    </html>
  );
}