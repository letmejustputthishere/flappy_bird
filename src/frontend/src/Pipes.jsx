const Pipes = ({ pipeX, gapHeight, gapPosition }) => {
    const pipeWidth = 50;

    const pipeStyle = {
        position: "absolute",
        width: `${pipeWidth}px`,
        backgroundColor: "green",
    };

    return (
        <>
            {/* Top pipe */}
            <div
                style={{
                    ...pipeStyle,
                    height: `${gapPosition}px`,
                    left: `${pipeX}px`,
                    top: "0px",
                }}
            ></div>
            {/* Bottom pipe */}
            <div
                style={{
                    ...pipeStyle,
                    left: `${pipeX}px`,
                    top: `${gapPosition + gapHeight}px`,
                    height: `calc(100vh - ${gapPosition + gapHeight}px)`,
                }}
            ></div>
        </>
    );
};

export default Pipes;
