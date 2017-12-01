import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText,CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import accessProduct from '../actions/product';

const styles = {
    block: {
        maxWidth: 1000,
        marginLeft: "10px",
        marginRight: "10px"
      },
}

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name  : "Product Name!",
            tribe : "Tribe Name"
        }
    }

    handleBuy = () => {
        alert("Congratulations! Product was bought!")
        accessProduct.declareInterest(this.props.user.id,this.props.info.product_id,
                                        this.props.info.category_id,this.props.info.tribe_id, (res) => {
                                            console.log(res)
                                        })
    }

    render() {
        return (
            <div style={styles.block} >
                <Card>
                    <CardHeader
                    title={ this.props.info.product_name }
                    subtitle={this.props.info.tribe_name }
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                    <CardMedia expandable={true}>
                        <div style={{height:"200"}}>
                            <div className="row">
                                <div className="col s12 m4 l5"><img src={require('../images/products/'+this.props.info.product_name+'.jpg')} alt="photo" style={{alignSelf:"left", height: "200", width: "350"}}/></div>
                                <div className="col s12 m4 l7" style={{marginTop: -20}}><p>{this.props.info.tribe_description}</p></div>  
                            </div>                          
                        </div>
                    </CardMedia>
                    <CardText expandable={true}>
                        <p>{this.props.info.description}</p>
                    </CardText>
                    <CardActions>
                        <FlatButton backgroundColor="#a4c639" label="COMPRAR" onClick={this.handleBuy}/>
                        <FlatButton disabled={true} label={ "R$" + this.props.info.product_price } />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Product;