/** @jsx createElement */
import { createElement, Fragment, Context } from '@bikeshaving/crank';
import { renderer } from '@bikeshaving/crank/dom';

function* MainPage() {
    while (true) {
        yield (
            <Fragment>
                <p>Hello CrankJS Project</p>
            </Fragment>
        );
    };
}

renderer.render(<MainPage />, document.body);
