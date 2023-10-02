import '@styles/globals.css';
import Nav from '@components/Nav';
import HomeVideo from '@components/homevideo';

const RootLayout = () => {
  return (
    <html>
        <div>
            <Nav />
            <HomeVideo/>
            <h2>
                AIESEC.lk Rewamp
            </h2>
        </div>
    </html>
  )
}

export default RootLayout