import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function ReturnFunction() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Return statement in Function</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Return statement in Function'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-function-parameters" 
                nextPath="/js-naming-functions"
            />
        </section>
    );
}