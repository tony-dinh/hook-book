module.exports = (api) => {
    api.cache(true)

    const presets = [
        ['@babel/preset-env', {modules: false}],
        '@babel/preset-react'
    ]

    const plugins = [
        '@babel/plugin-proposal-object-rest-spread',
    ]

    return {
        presets,
        plugins
    }
}
