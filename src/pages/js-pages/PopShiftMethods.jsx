import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function PopShiftMethods() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Pop & Shift Methods</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                    title='Pop & Shift Methods'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-array-loops" 
                nextPath="/js-slice-method"
            />
        </section>
    );
}