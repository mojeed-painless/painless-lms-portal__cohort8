import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function ObjectLoops() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Object Loops</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Object Loops'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-property-existence" 
                nextPath="/js-object-referencing"
            />
        </section>
    );
}