import { Button } from "./componets/Button"
import { Divider } from "./componets/Divider";
import { Loader } from "./componets/Loader";
import { useFetch } from "./hooks/useFetch"

export const QuoteApp = () => {

  const {data, fetchData, isLoading} = useFetch('https://api.adviceslip.com/advice') 

  const {id, advice} = !!data && data;

  return (
    <main>
      { isLoading
        ? <Loader />
      
        : <div className="quote-card animate__animated animate__fadeIn animate__fast">
            <div className="block-quote">
              <p className="author">Advice 	&#35;{id}</p>
              <q className="quote">{advice}</q>
            </div>
            <Divider />
            <Button customFunction={()=> fetchData()} />
          </div>
      }
    </main>
  )
}
