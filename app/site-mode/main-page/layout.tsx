
import styles from './styles/main-page.module.css'

export default function MainLayout({children}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <>
        {children}
    </>
  );
}