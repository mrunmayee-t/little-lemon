import heroImg from "../assets/images/restauranfood.jpg"

const Main = () => {
    return (<main>
        <div>
       <h1>Little Lemon</h1>
       <h2>Chicago</h2>
       <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
       <button>Reserve a Table</button>
       </div>
       <img src={heroImg} alt="hero image" className="hero-img"/>
    </main>)
}

export default Main