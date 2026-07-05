import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function ObjectMethods() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Object Methods</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Object Methods'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-cloning-object" 
                nextPath="/js-array-declaration"
            />
        </section>
    );
}