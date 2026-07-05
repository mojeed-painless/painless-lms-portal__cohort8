import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function SliceMethod() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Slice Method</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Slice Method'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-pop-shift-methods" 
                nextPath="/js-splice-method"
            />
        </section>
    );
}