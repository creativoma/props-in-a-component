import Contact from './Contact';
import img1 from  './images/mr-whiskerson.png';
import img2 from  './images/fluffykins.png';
import img3 from  './images/felix.png';
import img4 from  './images/pumpkin.png';


function App() {
  return (
      <div className="contacts">
          <Contact 
              img={img1}
              name="Mr. Whiskerson"
              phone="(212) 555-1234"
              email="mr.whiskaz@catnap.meow"
          />
          <Contact 
              img={img2}
              name="Fluffykins"
              phone="(212) 555-2345"
              email="fluff@me.com"
          />
          <Contact 
              img={img3}
              name="Felix"
              phone="(212) 555-4567"
              email="thecat@hotmail.com"
          />
          <Contact 
              img={img4}
              name="Pumpkin"
              phone="(0800) CAT KING"
              email="pumpkin@scrimba.com"
          />
      </div>
  )
}

export default App