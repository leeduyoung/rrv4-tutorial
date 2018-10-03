import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class About extends React.Component {

    componentDidMount() {
        console.log('componentDidMount About');
        window.scrollTo(0,0);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount About')
    }

    state = {
        num: 0
    }

    render() {
        console.log(this.props);
        return (
            <div style={{paddingTop: "64px"}}>
                About
                <button style={{height: "60px", border: "1px solid blue"}} onClick={this.goPosts.bind(this)}>Go Posts</button>
                <br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum quidem deserunt dolorem pariatur. Possimus nemo deleniti modi consequuntur molestias hic fuga corporis ea rerum nostrum nihil minima asperiores, nam aliquam officia vel error odit natus omnis ducimus autem optio. Molestiae cum porro recusandae sit, exercitationem tempore quibusdam alias totam a! Quasi itaque pariatur illum exercitationem repellendus sunt necessitatibus quam optio voluptate. Doloribus dolor nemo cum ipsam repudiandae commodi veritatis sunt eum eos, nobis, sapiente itaque, tenetur accusamus dolore. Esse numquam eligendi iusto, harum corporis deleniti tenetur deserunt quis tempora non quasi fuga beatae blanditiis? Incidunt perspiciatis laudantium voluptates maxime.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime eum a aliquam cupiditate placeat facere ratione quis delectus in explicabo, sit exercitationem? Cumque quo quis repudiandae ullam excepturi voluptate architecto provident, beatae vero placeat at, quas itaque eum commodi sint incidunt! Laborum ipsam consequatur iure, sunt quos illum? Excepturi nemo sit et sequi consequatur. Ipsa sint architecto, eaque, quisquam laborum recusandae ad vero a distinctio minima repudiandae ullam error numquam alias molestiae autem vel, blanditiis quasi suscipit! Dolorum commodi tempora officiis explicabo expedita debitis sint optio modi voluptate quisquam repudiandae autem unde iure, illum numquam magnam est nobis laboriosam pariatur alias fugit non officia! Autem, consequuntur temporibus! Corrupti non maxime repudiandae reiciendis quia sequi, quam rem earum, illo nesciunt eveniet beatae laudantium! Quae vero commodi autem expedita quis repudiandae, repellendus odit alias ab cupiditate quisquam tempora temporibus esse illo itaque suscipit facilis. Recusandae doloremque molestiae, consectetur laborum voluptatum maxime dolorum velit voluptates, distinctio eum unde minima, natus odio! Quis sed quo, quae doloremque, vitae asperiores quia quam numquam doloribus sunt odio consequuntur incidunt? Hic qui nemo quas omnis similique ut magnam magni corrupti modi at ratione nam laudantium velit dignissimos, fuga eaque fugiat libero veniam vel saepe dolor, unde aut. Illum illo veritatis nemo error totam repellat et placeat, sequi harum tempora reiciendis dolor maiores minus impedit. Cumque asperiores ex culpa suscipit magnam consequatur laudantium aut nam dolorem inventore. Ut quod, provident delectus facere repellat deleniti odit? Officia ratione deserunt ullam distinctio assumenda. Molestias cupiditate tempore placeat sint quisquam sit tempora deserunt. Expedita maiores tempore asperiores voluptatem reiciendis numquam unde excepturi magnam quam illum! Ratione placeat illum aut nemo animi maiores, cumque nam. Ipsa repellat odit fugit, laborum quam ad enim earum dicta illum ipsum quasi neque, eaque quo architecto maxime? Omnis perferendis minus dolorum enim, et rem necessitatibus.
                <br />
                <br />


                <button onClick={this.goBack.bind(this)}>go back</button>
                <br />
                <br />
                <button style={{height: "60px", border: "1px solid blue"}} onClick={this.goPosts.bind(this)}>Go Posts</button>
            </div>
        );
    }

    goBack() {
        this.props.history.goBack();
    }

    goPosts() {
        this.props.history.push("/posts");
    }
}