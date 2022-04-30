import { Link } from 'react-router-dom';

const Credits = (props) => {
	let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credits.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        }) 
    }
    return (
    	<div>
    	   <h1>Credits</h1>
    	   {creditsView()}
           <form onSubmit={props.addCredit}>
             <input type="text" name="description" />
             <input type="number" name="amount" />
             <button type="submit">Add Credit</button>
           </form>
           <Link to="/">Home</Link>
    	</div>

    )
}
export default Credits;