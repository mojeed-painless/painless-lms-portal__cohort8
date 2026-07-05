import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function SquareBracketNotation() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Square-bracket Notation</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Square-bracket Notation'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-dot-notation" 
                nextPath="/js-property-existence"
            />
        </section>
    );
}