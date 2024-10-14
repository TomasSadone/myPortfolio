import gh from '../../assets/gh.svg';
import linkedin from '../../assets/linkedin.svg';
import { LINKEDIN_URL, GH_URL } from '../../constants';

export const SocialMediaLogos = ({
    direction,
    className,
}: {
    direction: 'horizontal' | 'vertical';
    className?: string;
}) => {
    return (
        <div className={`social-media-logos-${direction} ${className}`}>
            <a href={LINKEDIN_URL}>
                <img
                    src={linkedin}
                    alt=''
                />
            </a>
            <a href={GH_URL}>
                <img
                    src={gh}
                    alt=''
                />
            </a>
        </div>
    );
};
