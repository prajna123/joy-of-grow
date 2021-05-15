import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  console.log("New quote page called");
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    
    history.push('/contact');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
