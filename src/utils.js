export function getAngle(p0, p1, p2){

    const determinant = m =>
        m.length == 1 ?
            m[0][0] :
            m.length == 2 ?
                m[0][0]*m[1][1]-m[0][1]*m[1][0] :
                m[0].reduce((r,e,i) =>
                    r+(-1)**(i+2)*e*determinant(m.slice(1).map(c =>
                        c.filter((_,j) => i != j))),0)
    const dotproduct = function(a,b) {
        return a.map(function(x,i) {
            return a[i] * b[i];
        }).reduce(function(m,n) { return m + n; });
    }

    const v0 = [p0.x - p1.x, (1 - p0.y) - (1 - p1.y)]
    const v1 = [p2.x - p1.x, (1 - p2.y) - (1 - p1.y)]

    const det = determinant([v0, v1])
    const dot = dotproduct(v0, v1)

    return Math.atan2(det, dot) * (180 / Math.PI)
}
export const PartsEnum = {nose:0,
    left_eye_inner:1,
    left_eye:2,
    left_eye_outer:3,
    right_eye_inner:4,
    right_eye:5,
    right_eye_outer:6,
    left_ear:7,
    right_ear:8,
    mouth_left:9,
    mouth_right:10,
    left_shoulder:11,
    right_shoulder:12,
    left_elbow:13,
    right_elbow:14,
    left_wrist:15,
    right_wrist:16,
    left_pinky:17,
    right_pinky:18,
    left_index:19,
    right_index:20,
    left_thumb:21,
    right_thumb:22,
    left_hip:23,
    right_hip:24,
    left_knee:25,
    right_knee:26,
    left_ankle:27,
    right_ankle:28,
    left_heel:29,
    right_heel:30,
    left_foot_index:31,
    right_foot_index:32
}
