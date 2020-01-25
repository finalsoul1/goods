import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CloudUpload } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import ProductImage from '../modules/product'
import uniqid from 'uniqid'
import { inject, observer } from 'mobx-react'

const useStyles = makeStyles(theme => ({
  root: {},
  ul: theme.noneStyledUl,
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}))

const ProductContainer =
  inject(stores => ({
    fabric: stores.fabric,
    product: stores.product
  }))
  (observer((props) => {
    const classes = useStyles()

    const addProduct = () => {
      const [item, ...etc] = props.product.productImage
      props.fabric.pushImage(
        <ProductImage
          key={uniqid('product-')}
          url={item.url}
          scale={0.7}
          top={50}
          left={10}
        />
      )
    }

    return (
      <div className={classes.root}>
        <ul className={classes.ul}>
          <li>
            <Button size="large" onClick={addProduct}>
              <CloudUpload className={classes.extendedIcon}/>
              상품 변경하기
            </Button>
          </li>
          <li>
            <Button size="large">
              <CloudUpload className={classes.extendedIcon}/>
              상품
            </Button>
          </li>
        </ul>
      </div>
    )
  }))

export default ProductContainer
