import './directory.styles.scss';
import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component';

export default class Dicectory extends Component {
    constructor(props) {
        super(props);
        this.state={
            section:[
                {
                    title:"HATS",
                    imageUrl:"https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                    id:1
                },
                {
                    title:"HATS",
                    imageUrl:"https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                    id:2
                },
                {
                    title:"HATS",
                    imageUrl:"https://image.shutterstock.com/image-vector/brimmed-male-female-hats-caps-260nw-1687352683.jpg",
                    id:3
                },
                {
                    title:"WOMENS",
                    imageUrl:"https://media.istockphoto.com/photos/business-woman-balancing-life-having-to-wear-too-many-hats-picture-id172708699?b=1&k=20&m=172708699&s=170667a&w=0&h=VEoqtynEmFcE969CRLUx_kcgkhgbP8n47eZH2A32mJM=",
                    size:"large",
                    id:4
                },
                {
                    title:"MENS",
                    imageUrl:"https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20-1200x800.jpg",
                    size:"large",
                    id:2
                },
            ]
        }
    }
    
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({id,imageUrl,title,size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}
