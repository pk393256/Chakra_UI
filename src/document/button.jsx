import { Button, ButtonGroup } from '@chakra-ui/react'

function B(props){
    const {name,colorScheme,variant}=props
    return(<Button colorScheme={colorScheme} variant={variant}>{name}</Button>)
    
}
export default B;