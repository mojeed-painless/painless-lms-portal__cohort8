import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function DotNotation() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Dot Notation</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Dot Notation'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-objects" 
                nextPath="/js-square-bracket-notation"
            />
        </section>
    );
}