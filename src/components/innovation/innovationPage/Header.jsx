// import heroImg from '../../../assets/innovation/innovation-header.png'
import { getImgUrl } from '../../../helpers/get-img-url'
import { styles } from '../../../style'

export default function Header({ profileImg }) {
	return (
		<section className={`w-full block ${styles.paddingX} py-8 md:mt-20`}>
			<div className="w-full bg-ecoLightGreen">
				{profileImg ? (
					<img
						src={getImgUrl(profileImg)}
						alt=""
						aria-description="innovation header image"
						className="w-full h-[20rem] object-fill object-center"
					/>
				) : (
					<div aria-hidden className="w-full h-[20rem] bg-ecoLightGreen"></div>
				)}
			</div>
		</section>
	)
}
