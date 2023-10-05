import '@styles/globals.css'

const Home = () => {
    const column1Styles = {
        textAlign: 'right',
        fontFamily: 'Lato',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: 'normal',
      };
      const column2Styles = {
        textAlign: 'right',
        fontFamily: 'Lato',
        fontSize: '18px',
        fontStyle: 'normal',
       // fontWeight: 500,
        lineHeight: 'normal',
      };
      const column3Styles = {
        textAlign: 'left',
        fontFamily: 'Lato',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: 'normal',
      };
      const column4Styles = {
        textAlign: 'left',
        fontFamily: 'Lato',
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: 'normal',
      };
    
    return (
      <div className="flex">
        <div className="w-1/2 bg-aiesec-blue text-white font-lato text-right ">
            
          <h1 style={column1Styles} className='mx-4 mt-4 mb-4 ml-4 mr-4'>Who Are We</h1>
          <p className='mx-4 mt-4  ml-4'>
             AIESEC is a global platform for young people to develop their leadership potential through international internships and volunteer opportunities. Founded in 1948 and currently present in 110+ countries and territories, AIESEC is a non-governmental, and not-for-profit organization entirely run by youth for youth.
            
          </p>
        </div>
        <div className="w-1/2 bg-white font-lato text-left mx-4">
        <h1 style={column3Styles} className='mx-4 mt-4 mb-4 ml-4 mr-4 text-aiesec-blue' >About AIESEC in Sri Lanka</h1>
         <p className='mx-4 mt-4  ml-4'  >
         AIESEC is a global platform for young people to develop their leadership potential through international internships and volunteer opportunities. Founded in 1948 and currently present in 110+ countries and territories, AIESEC is a non-governmental, and not-for-profit organization entirely run by youth for youth. AIESEC Sri Lanka was  established in 1995, as a member chapter of AIESEC International
       
            </p>
        <button className="bg-white text-aiesec-blue  py-2 px-4 rounded-md border-blue border-2 mx-4 mt-4 mb-4 ml-4 mr-4">
          Learn More
        </button>
        </div>
      </div>
    );
  };

  export default Home;