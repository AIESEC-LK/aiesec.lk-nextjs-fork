import '@styles/globals.css';
import Nav from '@components/Nav';
import HomeVideo from '@components/homevideo';
import Counter from '@components/CounterSection';

const RootLayout = () => {
  return (
    <html>
        <div>
            <Nav />
            <HomeVideo/>
            <Counter/>
            <h2>
                AIESEC.lk Rewamp
            </h2>
        </div>
    </html>
  )
}

export default RootLayout