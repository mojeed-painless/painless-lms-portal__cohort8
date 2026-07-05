import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function SpliceMethod() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Splice Method</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Splice Method'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-slice-method" 
                nextPath=""
            />
        </section>
    );
}