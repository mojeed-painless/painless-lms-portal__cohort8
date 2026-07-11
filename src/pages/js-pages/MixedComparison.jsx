import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function MixedComparison() {

    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Mixed Comparison</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    
                        <VideoBox 
                            title='Mixed Comparison'
                            code='T6Rvf91ZI0o'
                        />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-string-comparison" 
                nextPath="/js-if-statement"
            />
        </section>
    );
}
