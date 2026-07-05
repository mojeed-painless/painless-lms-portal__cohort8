import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function MultipleTypedArray() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Multiple Typed Array</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Multiple Typed Array'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-array-length" 
                nextPath="/js-array-loops"
            />
        </section>
    );
}