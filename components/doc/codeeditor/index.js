import { getVueApp } from './templates';

const useCodeSandbox = (language, code, service, extPages, dependencies, component, extFiles) => {
    const getSandboxParameters = (sourceType) => {
        const { files, dependenciesDemo, sourceFileName } = getVueApp({ code, service, extPages, dependencies, component, extFiles }, sourceType);

        files['sandbox.config.json'] = {
            content: {
                infiniteLoopProtection: false
            }
        };

        return { files, dependenciesDemo, sourceFileName };
    };

    const sandboxParameters = getSandboxParameters({ language });

    fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(sandboxParameters)
    })
        .then((response) => response.json())
        .then((data) => window.open(`https://codesandbox.io/s/${data.sandbox_id}`, '_blank'));
};

export { useCodeSandbox };
