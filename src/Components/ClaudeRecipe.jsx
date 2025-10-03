import "./index.css";
import Markdown from "react-markdown";
export default function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <Markdown>{props.recipe}</Markdown>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
      nam doloremque, voluptatem earum dicta, suscipit vero sed nihil quia
      velit, aliquid accusantium. Iste ipsum repellat pariatur debitis.
      Assumenda, voluptas numquam? Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Mollitia optio excepturi consectetur nesciunt illo
      temporibus ullam laborum magni ex voluptatem laudantium, consequuntur enim
      vero repudiandae placeat odit delectus ipsam modi?
    </section>
  );
}
