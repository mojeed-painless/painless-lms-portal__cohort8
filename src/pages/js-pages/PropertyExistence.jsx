import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function PropertyExistence() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Test for Property Existence</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Test for Property Existence'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-square-bracket-notation" 
                nextPath="/js-object-loops"
            />
        </section>
    );
}