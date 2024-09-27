import heroImg from '../../../assets/innovation/innovation-header.png'
import { styles } from '../../../style'

export default function Header() {
	return (
		<section className={`w-full block ${styles.paddingX} py-8 md:mt-20`}>
			<div className="w-full">
				<img
					src={heroImg}
					alt="innovation header image"
					className="w-full h-[20rem] object-fill object-center"
				/>
			</div>
		</section>
	)
}
