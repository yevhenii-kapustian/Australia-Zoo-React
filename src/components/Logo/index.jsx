import { getImgUrl } from '../../utils/function'

const Logo = () => {
    return(
        <a href="/"><img height={80} src={getImgUrl("logo.png")} alt="logo" /></a>
    )
}

export default Logo