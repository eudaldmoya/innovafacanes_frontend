import  Image  from 'react';

//Quan recarrego la web, perdo els props perque es SSR i es genera un html que després s'envia al client
export default function HomeCarousel (props)  {
  const URL = `http://localhost:1337`;
  return (
    <div>
      {
        
        // props.carousel.map(({ url, alt }, index) => (
        //   <Image key={index} src={`${URL}${url}`} alt={alt}/>
        // )) 
      }
    </div>
  )
}