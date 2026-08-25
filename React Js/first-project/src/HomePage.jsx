import reactLogo from './assets/images/react.svg'


export default function HomePage() {

  var heading = 'This is a heading';

  var status = 0;

  return (
    <>
      <img src={reactLogo} style={{ backgroundColor : 'red', width : '200px' }} />
      <div className="home">
          { heading }
      </div>

      {
        status == 1
        ?
        <div className="home">
            Hello World
        </div>
        :
        ''
      }

      
    </>
  )
}
