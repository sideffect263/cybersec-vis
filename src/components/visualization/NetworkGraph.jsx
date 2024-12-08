// src/components/visualization/NetworkGraph.jsx

import React, { useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Box, Paper } from '@mui/material';
import * as THREE from 'three';

// Node component for network vertices
const Node = ({ position, color = '#1976d2', label }) => {
  const meshRef = useRef();

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {label && (
        <Html distanceFactor={10}>
          <div style={{ 
            background: 'rgba(0,0,0,0.8)', 
            padding: '2px 4px', 
            borderRadius: '4px',
            color: 'white',
            fontSize: '12px'
          }}>
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

// Edge component for connections
const Edge = ({ start, end, color = '#666666' }) => {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 1,
        (start[2] + end[2]) / 2
      ),
      new THREE.Vector3(...end)
    );
    return curve.getPoints(50);
  }, [start, end]);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} />
    </line>
  );
};

const NetworkGraph = ({ data = {} }) => {
  const { nodes = [], edges = [] } = data;

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '500px',
        bgcolor: 'background.paper' 
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Render nodes */}
        {nodes.map((node, index) => (
          <Node
            key={node.id || index}
            position={node.position}
            color={node.color}
            label={node.label}
          />
        ))}

        {/* Render edges */}
        {edges.map((edge, index) => (
          <Edge
            key={index}
            start={edge.start}
            end={edge.end}
            color={edge.color}
          />
        ))}
      </Canvas>
    </Paper>
  );
};

export default NetworkGraph;