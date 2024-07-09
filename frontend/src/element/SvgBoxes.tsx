import { IMAGE } from "../constent/theme"

const SvgList = [
    { svg: IMAGE.about_svg4 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg6 },
    { svg: IMAGE.about_svg4 },

]
const SvgBoxes = () => {
  return (
   <>
          <ul className="dz-shape-2">
              {SvgList.map((item, index) => (
                  <li key={index}>{item.svg}</li>
              ))}
          </ul>
   </>
  )
}

export default SvgBoxes