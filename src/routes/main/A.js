import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

export default class A extends React.Component {

    componentDidMount() {
        console.log('componentDidMount A');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount A')
    }

    render() {
        return (
            <div style={{paddingTop: "64px"}}>
                A
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus dolores dolore nihil soluta nostrum ipsam, fugiat nemo molestias provident natus. Excepturi dolorem expedita repellendus voluptas? Laborum reiciendis mollitia, asperiores nostrum molestiae excepturi atque similique. Facilis labore aspernatur laborum quo obcaecati dicta eligendi minus, fugiat quam tenetur sit doloribus possimus maxime? Autem numquam fugiat sit optio aliquid voluptate perferendis neque animi ad vitae iusto magni, quia temporibus suscipit natus explicabo nemo non. Sed, in eligendi laborum repellat facilis neque officia quisquam. Quos quaerat autem aliquid minus et pariatur non animi, rerum recusandae eius iste corporis, modi facilis nihil! Corrupti fugiat autem aliquid recusandae omnis! Quam sapiente, soluta aliquid a provident ducimus incidunt debitis ut vitae sit tempore maiores eveniet dolore, veniam repellendus quas voluptate quisquam non nulla porro possimus voluptatibus numquam illo corrupti! Corporis deserunt eum facilis corrupti deleniti doloremque consequuntur nostrum. Amet recusandae officia quibusdam! Corporis perferendis fuga at deserunt nemo? Vel necessitatibus distinctio id, fugiat quas veniam ut deleniti debitis esse voluptas assumenda enim laborum sunt dolorum fugit aut ullam vero consequatur repudiandae eveniet harum sequi praesentium voluptatibus earum! Obcaecati amet veritatis iusto doloribus dolores ut tenetur, ex harum reiciendis tempore iste saepe unde? Quae commodi vitae iste quo sequi veniam, voluptatum laboriosam deserunt sapiente culpa fuga suscipit autem repudiandae consequuntur, consectetur ullam maxime libero. Expedita, dolorum quisquam, non perspiciatis ipsum quae facilis et culpa, sed delectus dicta soluta. Illo commodi ipsa delectus saepe. Neque incidunt architecto tempore animi, ut non dicta et facilis voluptate minus tenetur dolor. Sapiente id cumque quis, ipsum assumenda laudantium dolore, ad odio aspernatur vitae pariatur eum exercitationem quod voluptatibus consequatur porro nemo incidunt sit ab aliquid quo quaerat! Eum sapiente iusto soluta minima dolore at quos nam magni itaque assumenda corporis, tempore doloremque reiciendis dolor nesciunt sequi, quia veritatis tenetur. Autem alias accusantium ab ratione saepe blanditiis nam quisquam, placeat natus illum excepturi dolor distinctio tempora obcaecati quis in rem commodi delectus facere repellat totam repellendus! Esse a sapiente commodi fugit doloremque maiores eum mollitia, nemo laudantium minus ex vitae aperiam inventore, ipsa exercitationem hic, aliquid sunt porro possimus odio corporis. Sequi, quas. Animi inventore dolore vero unde quisquam ipsum saepe quia beatae. Quos veniam libero nulla soluta. Illo, libero. Quibusdam iure maiores alias assumenda debitis id necessitatibus et? Unde non ea quod saepe modi totam sunt sint cumque. Ex voluptatibus, eius id inventore maxime similique nam in, qui cumque atque dicta cupiditate veritatis sed suscipit cum, voluptate laudantium eveniet repudiandae ratione expedita incidunt voluptatum dolores? Libero, sapiente! Quisquam neque quaerat est quos iusto corrupti iste obcaecati odio! Esse recusandae sit veritatis quos, repellat officiis eius consectetur perspiciatis suscipit libero molestiae deleniti ducimus? Eos ipsum debitis, quam id optio repellat obcaecati dolore architecto, beatae laboriosam deleniti dignissimos, minima sit laudantium eligendi fugit unde delectus voluptates. Aliquam nam ex porro odio ad commodi incidunt, itaque quod illo, et debitis cumque sed magnam facilis rerum officia repudiandae quia odit doloremque voluptates ab. Unde mollitia nam ducimus aperiam numquam error vel ad quis sit dolorum?
                <br />
                {/* <button style={{border: "1px solid blue"}} onClick={this.goAbout.bind(this)}>Go About</button> */}
                {/* <NavLink to="/about">About</NavLink> */}
            </div>
        );
    }

    goAbout() {
        this.props.history.push("/about");
    }
}