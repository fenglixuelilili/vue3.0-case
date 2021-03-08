import router from "./index"
router.beforeEach((to, from, next) => {
    console.log('钩子',to)
    // ${//to and from are Route Object,next() must be called to resolve the hook}
    next()
})